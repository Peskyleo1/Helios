import { IonContent, IonHeader, IonPage } from '@ionic/react';
import { Link } from 'react-router-dom';
import Title from '../components/Title/Title';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
      <div className='sun-box'>
      <Link onClick={alert} to={'/www'}>
            <div className='sun'>
              
            </div>
            </Link>
          </div>
        <div className='scroll-content'>
          
          <div className='scroll-panel'>
          <Title>SPF</Title>
          <div className='cream-selector'>
            <div className='cream-button'>0</div>
            <div className='cream-button'>5</div>
            <div className='cream-button'>10</div>
            <div className='cream-button'>15</div>
            <div className='cream-button'>20</div>
            <div className='cream-button'>25</div>
            <div className='cream-button'>30</div>
            <div className='cream-button'>40</div>
            <div className='cream-button'>50</div>
          </div>
          
          </div>
        </div>
        <div className='footer'></div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
