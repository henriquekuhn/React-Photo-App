import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { camera, trash, close } from 'ionicons/icons';
import { IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonButton } from '@ionic/react'; // IonButton é necessário
import { usePhotoGallery } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();
 
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="small">Photo Gallery App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Welcome to Photo Gallery App" />
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={photo.filepath}>
                <IonImg src={photo.webviewPath} />
                {/* Adiciona o botão de deletar */}
                <IonButton fill="clear" color="danger" onClick={() => {
                  console.log('Rendering photo:', photo.filepath)
                  deletePhoto(photo.filepath)}}>                
                  <IonIcon icon={trash} />
                </IonButton>
              </IonCol>
            ))}
          </IonRow>
      </IonGrid>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
          <IonIcon icon={camera}></IonIcon> 
          </IonFabButton>
        </IonFab>       
    </IonContent>
  </IonPage>
  );
};

export default Tab2;
