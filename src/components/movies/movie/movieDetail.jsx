import React from 'react';

import {Icon} from 'antd-mobile';

require('./movieDetail.scss') 

class MovieDetail extends React.Component {
  
    render() {
        return (
            <div className="movieDetail">
                科目详情
                {/* <div>
                    
                        
                            <Icon type="left"  />电影详情
                        
                    
                    <div className='flex pdt-10'>
                        <div className='flex-1 justify-center flex' >
                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537158013.webp" alt="" width="70" height="100"/>
                        </div>
                        <div className='flex-3'>
                            <h3 className="font-blod font-16">毒液：致命守护者</h3>
                            <div>动作/科幻/惊悚/美国/107分钟 </div>
                            <div>2018-11-09 中国大陆上映</div>
                        </div>
                    </div>
                    
                </div> */}
            </div>
        );
    }
  }

  
  export default MovieDetail