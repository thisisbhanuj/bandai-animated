/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';

import styles from '../styles';

const Video = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <video controls width="100%">
          <source src="https://shop.bandai.com/media/wysiwyg/DBS_STOPMO_Goku%20SS%20Blue%20vs%20Golden%20Freezer_FULL%20EDIT_FINAL_REV2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </section>
);

export default Video;
