/**
 * Created by melalex on 4/22/17.
 */

import '../../styles/Share.css'
import React, {Component} from 'react';
import {ShareButtons, generateShareIcon} from 'react-share';

const {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    VKShareButton,
} = ShareButtons;


const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const VKIcon = generateShareIcon('vk');

export default class extends Component {
    render() {
        const shareUrl = 'http://github.com';
        const title = 'GitHub';

        return (
            <div className="share-network">
                <div className="share-network-item">
                    <FacebookShareButton url={shareUrl} title={title}>
                        <FacebookIcon size={32} round/>
                    </FacebookShareButton>
                </div>

                <div className="share-network-item">
                    <TwitterShareButton url={shareUrl} title={title}>
                        <TwitterIcon size={32} round/>
                    </TwitterShareButton>
                </div>

                <div className="share-network-item">
                    <GooglePlusShareButton url={shareUrl}>
                        <GooglePlusIcon size={32} round/>
                    </GooglePlusShareButton>
                </div>

                <div className="share-network-item">
                    <LinkedinShareButton url={shareUrl} title={title}>
                        <LinkedinIcon size={32} round/>
                    </LinkedinShareButton>
                </div>

                <div className="share-network-item">
                    <VKShareButton url={shareUrl}>
                        <VKIcon size={32} round/>
                    </VKShareButton>
                </div>
            </div>
        );
    }
}