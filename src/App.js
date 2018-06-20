import React, { Fragment, Loading } from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList';

export default class App extends React.Component {
    state = {
        currentId: 1,
        showDetail: false,
        MoviePage: null,
    };

    handleMovieClick = async id => {
        const { default: MoviePage } = await import('./MoviePage');

        this.setState({
            currentId: id,
            MoviePage,
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

    renderDetail = id => {
        const { MoviePage } = this.state;

        if (MoviePage) {
            return (
                <Fragment>
                    <button onClick={this.handleBack} className="App-back">
                        <span>{'👈'}</span>
                    </button>
                    <MoviePage id={id} />
                </Fragment>
            );
        }
    };

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
