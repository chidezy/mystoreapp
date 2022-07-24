import {ObjectCardCollection} from '../ui-components';
const Home = () => {
return (<div>
      
      <div className="App-header">
        <ObjectCardCollection isPaginated itemsPerPage={6}/>
      </div>
    </div>);
};
export default Home;