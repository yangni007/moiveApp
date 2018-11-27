
 
import React from 'react';
import { BrowserRouter, Link, Redirect  } from 'react-router-dom'
require('./movieLists.scss')
import { Tabs, WhiteSpace, Badge } from 'antd-mobile'; 

const tabs : Array = [
    { title: '正在上映' },
    { title: '即将上映' }
  ];

class MovieLists extends React.Component {
  
    render() {
      return (
        <div>
            <Tabs tabs={tabs}
                initialPage={0}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
            >
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', backgroundColor: '#fff' }}>
            <Link  to="/movieDetail">
                <div className="flex movie-list" >
                    <div className="flex flex-1 justify-center" >
                        <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537158013.webp" alt="" width="60" height="90"/>
                    </div>
                    <div className="flex-3">
                        <h3>毒液</h3>
                        <p>导演： 本·弗雷斯彻</p>
                        <p>演员： 汤姆·哈迪 / 米歇尔·威廉姆斯 </p>
                    </div>
                </div>
            </Link >
                <WhiteSpace />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%', backgroundColor: '#fff' }}>
                Content of second tab
            </div>
            </Tabs>
            <WhiteSpace />
        </div>
      );
    }
  }

  
  export default MovieLists