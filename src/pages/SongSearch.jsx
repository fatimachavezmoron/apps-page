import React, { useEffect, useState } from 'react'
import Loader from './SongSearchApp/Loader/Loader'
import SongDetails from './SongSearchApp/SongDetails'
import SongForm from './SongSearchApp/SongForm'
import './SongSearchApp/SongSearch.css'

const SongSearch = () => {
  const [search, setSearch] = useState(null)
  const [lyric, setLyric] = useState(null)
  const [bio, setBio] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = (data) => {
    console.log(data);
  };

  return (
    <div className='songCont'>
      <h1>Song Search</h1>
      {loading && <Loader/>}
      <SongForm handleSearch={handleSearch}/>
      <SongDetails
        search={search}
        lyric={lyric}
        bio={bio}
      />
    </div>
  )
}

export default SongSearch