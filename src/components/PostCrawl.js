import React, { Component } from 'react'

import PanCrawl from './audio/pan-crawl.mp3'

import './PostCrawl.css'

class PostCrawl extends Component {
  render() {
    return (
      <div>
        <audio autoPlay>
          <source src={PanCrawl} type="audio/mpeg" />
        </audio>
        <div className="pan-down">
          <div className="post-pan">
            <div className="pan-box">
              <button type="submit" onClick={this.props.revealCrawl} className="pan-button left">
                REPLAY CRAWL
              </button>
              <button type="submit" onClick={this.props.newCrawl} className="pan-button right">
                NEW CRAWL
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostCrawl
