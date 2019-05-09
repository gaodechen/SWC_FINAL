import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { PageHeader, Icon } from 'antd'

import Carousel from '../Carousel'
import { ContentLayout } from '../../components/Layouts';
import { SongPinList } from '../SongPinList'
import { actions } from '../../modules/recommend'

/**
 * @description default Index & Music page
 * @class WrappedMusic
 * @extends {Component}
 */
class WrappedMusic extends Component {
    componentDidMount() {
        this.props.getPosters();
    }

    render() {
        return (
            <div>
                <Carousel num={3} carousel={this.props.posters} />
                <ContentLayout sider={false}>
                    <div className="music-page-content">
                        <PageHeader
                            backIcon={<Icon type="star"/>}
                            title="猜你喜欢"
                        />
                        <SongPinList row={2} col={1} songList={this.props.songList} />
                        <PageHeader
                            onBack={() => null}
                            title="换一批"
                            subTitle="再来几首！"
                        />
                    </div>
                </ContentLayout>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.home.userInfo,
        recommend: state.recommend.songList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // get posters to display on carousel
        getPosters: () => {
            dispatch(actions.getPosters);
        },
        // get music recommendatios for userId
        getRecommend: (userId) => {
            dispatch(actions.getRecommend);
        }
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(WrappedMusic)
);