import React, {useState} from 'react'
import './SongSearch.css'

const initialForm = {
  artist:'',
  song:''
}

const SongForm = ({handleSearch}) => {

  const [form, setForm] = useState(initialForm)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className='SongFormCont'>
      <form >
        <input
          type='text'
          name='artist'
          placeholder='Interpreter name'
          onChange={handleChange}
          value={form.artist}         
        />
        <br/>
        <br/>
        <input
          type='text'
          name='song'
          placeholder='Song name'
          onChange={handleChange}
          value={form.song}
        />
        <br/>
        <br/>
        <input 
          className='inputBtn'
          type='submit'
          value='Send'
        />
      </form>
    </div>
  )
}

export default SongForm