import React,{useState} from 'react'
import './ImageSearch.css'
import Modal from 'react-modal'; 

const ImageSearch = () => {
  const [valor, setValor] = useState('');
  const [results, setResults] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const searchRes = async () => {
    const API_KEY = `G7PyDBHsgI27DNov1huNkIjG1rt1QIyWx7DZNCam9tY`
    const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${valor}&per_page=33`

    const response = await fetch(URL);
    const data = await response.json();
    setResults(data.results);
    console.log(data);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      searchRes();
    }
  };

  return (
    <div className='songCont'>
      <div className='inputCont'>
        <h1>My Gallery</h1>
        <input
          placeholder='Search images'  
          onChange={e => setValor(e.target.value)}
          onKeyDown={handleKeyDown} 
          style={{width:'250px', height:'40px', borderRadius:'4px'}}
        />
        <button className="btn btn-primary" onClick={searchRes}>
          Search
        </button>
      </div>
      <div className='main_content_'>
        {results.map((elemento, indice) => (
          <div key={indice} className='main_content_grid'>
            <img src={elemento.urls.regular} onClick={() => openModal(elemento.urls.regular)} />
          </div>
        ))}
      </div>

      <Modal
        isOpen={selectedImage !== null}
        onRequestClose={closeModal}
        contentLabel='Selected Image'
        className='modalBG'
      >
        {selectedImage && (
          <img src={selectedImage} alt='Selected' style={{ width: '450px', height: 'auto' }}/>
        )}
        <button className='btnImg'  onClick={closeModal} >X</button>
      </Modal>
    </div>
  )
}

export default ImageSearch;