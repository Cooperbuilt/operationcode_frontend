import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import Button from 'shared/components/button/button';
import styles from './thanks.css';

class Thanks extends Component {
<<<<<<< HEAD
  componentWillMount() {
    const script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js';
    script.async = true;
    const script1 = document.createElement('script');
    script1.src = 'https://s3.amazonaws.com/idme/developer/idme-buttons-2.0.1/assets/js/idme-modal.min.js';
    script1.async = true;
    document.body.appendChild(script, script1);
  }
  idMe = () => {
    window.open('https://api.id.me/oauth/authorize?client_id=6d781bfd42506613a0fe4ad4123aaf6d&redirect_uri=https://www.operationcode.org/profile/verify&response_type=code&scope=military&display=popup', '', 'scrollbars=yes,menubar=no,status=no,location=no,toolbar=no,width=750,height=780,top=200,left=200');
  }
=======
>>>>>>> dc727a56dff9d9e8a7a17e1d434af22015255057

  render() {
    return (
      <Section title="Thanks for joining">
        <span>Thanks for joining operation code. Please check your email for orders.</span>
<<<<<<< HEAD
        <span className={styles.auth}>If you are interested in scholarships and / or hardware loans, please authenticate yourself using the button below.</span>
        <Button className={styles.authbtn} onClick={this.idMe}>
          ID.Me Authentication
        </Button>
=======
>>>>>>> dc727a56dff9d9e8a7a17e1d434af22015255057
      </Section>

    );
  }
}

export default Thanks;
