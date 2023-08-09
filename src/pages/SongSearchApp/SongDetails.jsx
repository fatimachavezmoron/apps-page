import React from 'react'
import SongArtist from './SongArtist'
import SongLyrics from './SongLyrics'

const SongDetails = ({search, lyric, bio}) => {
  return (
    <div>
      <h1>Details</h1>
      <SongArtist/>
      <SongLyrics/>
    </div>
  )
}

export default SongDetails