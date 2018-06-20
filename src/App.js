import React, { Fragment, Loading } from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList';
import MoviePage from './MoviePage';

export default class App extends React.Component {
    state = {
        currentId: 1,
        showDetail: false,
        MoviePage: null,
    };

    handleMovieClick = id => {
        this.setState({
            currentId: id,
        });

        ReactDOM.unstable_deferredUpdates(() => {
            this.setState({
                showDetail: true,
            });
        });
    };

    handleBack = () => {
        this.setState({
            showDetail: false,
        })
    };

    renderList = loadingId => (
        <MovieList loadingId={loadingId} onMovieClick={this.handleMovieClick} />
    );

    renderDetail = id => (
        <Fragment>
            <button onClick={this.handleBack} className="App-back">
                <span>{'👈'}</span>
            </button>
            <MoviePage id={id} />
        </Fragment>
    );

    render() {
        const { currentId, showDetail } = this.state;
        return (
            <Loading>
                {isLoading => showDetail ?
                    this.renderDetail(currentId) :
                    this.renderList(
                        isLoading ? currentId : null
                    )
                }
            </Loading>
        )
    }
}
