import {NavBar, EditObject} from '../ui-components';
import {withAuthenticator} from '@aws-amplify/ui-react';
import { useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { ObjectModel } from '../models';
const AddObject = ({user, signOut}) => {
  const [title, setTitle]= useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  
  const createObject = async () =>{
    try{
      await DataStore.save(
        new ObjectModel({
          title: title,
          price: parseFloat(price),
          description: description,
          imageUrl: imageUrl
    })
      )
    } catch (err){
      console.log(err);
    }
  };
  const editobjectOverrides ={
    "title": {
      onChange: (event) => {setTitle(event.target.value);}
    },
    "price": {
      onChange: (event) => {setPrice(event.target.value);}
    },
    "description":{
      onChange: (event) => {setDescription(event.target.value);}
    },
    "imageUrl": {
      onChange: (event) => {setImageUrl(event.target.value);}
    },
    "Button": {
      onClick: createObject
    }
  };
  const navbarOverrides ={
    "image":{
      src: user?.attributes?.picture
    },
    "Signout":{
      onClick: signOut
    }
  };
return (<div>
      <NavBar width='100%'  overrides={navbarOverrides} />
      <header className="App-header">
        <EditObject style={{textAlign: "left"}} overrides={editobjectOverrides} />
      </header>
    </div>);
};
export default withAuthenticator(AddObject);