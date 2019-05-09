import React, { Component } from 'react'
import { List, Avatar, Icon, Typography, Divider, Tabs, PageHeader } from 'antd'

const { TabPane } = Tabs;

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);
/**
 * @description Article List based on <List /> component
 * @class ArticleList
 * @extends {Component}
 */
class ArticleList extends Component {
    render() {
        return (
            <div style={{margin: '16px 0', padding: '36px', border: '2px dashed #e9e9e9', backgroundColor: '#fff'}}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="我的收藏" key="1">
                    </TabPane>
                    <TabPane tab="我的作品" key="2">
                        <List
                            grid={{ gutter: 16, column: 1 }}
                            itemLayout="vertical"
                            dataSource={this.props.data}
                            renderItem={item => (
                                <List.Item
                                    actions={[<p>删除作品</p>]}
                                    style={{border: '2px dashed #fafafa', backgroundColor: '#eee', padding: '8px'}}
                                >
                                    {item.content}
                                    />
                                </List.Item>
                            )}
                        />
                        <PageHeader backIcon={<Icon type="add-circle"/>} title="创作" subTitle="创作其他作品"></PageHeader>
                    </TabPane>
                    <TabPane tab="历史纪录" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>
        )
    }
}

export default ArticleList;