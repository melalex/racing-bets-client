/**
 * Created by melalex on 4/22/17.
 */

import '../../styles/Share.css'
import React, {Component} from 'react';
import {ShareButtons, generateShareIcon} from 'react-share';
import {SHARE_URL, TITLE} from '../../constants/Share'

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
        return (
            <div className="share-network">
                <div className="share-network-item">
                    <FacebookShareButton url={SHARE_URL} title={TITLE}>
                        <FacebookIcon size={32} round/>
                    </FacebookShareButton>
                </div>

                <div className="share-network-item">
                    <TwitterShareButton url={SHARE_URL} title={TITLE}>
                        <TwitterIcon size={32} round/>
                    </TwitterShareButton>
                </div>

                <div className="share-network-item">
                    <GooglePlusShareButton url={SHARE_URL}>
                        <GooglePlusIcon size={32} round/>
                    </GooglePlusShareButton>
                </div>

                <div className="share-network-item">
                    <LinkedinShareButton url={SHARE_URL} title={TITLE}>
                        <LinkedinIcon size={32} round/>
                    </LinkedinShareButton>
                </div>

                <div className="share-network-item">
                    <VKShareButton url={SHARE_URL}>
                        <VKIcon size={32} round/>
                    </VKShareButton>
                </div>
            </div>
        );
    }
}