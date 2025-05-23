async function searchSong() {
    const songName = document.getElementById('song-name').value;
    const searchUrl = `https://music-api.gdstudio.xyz/api.php?types=search&source=netease&name=${encodeURIComponent(songName)}&count=1&pages=1`;
  
    try {
      const response = await fetch(searchUrl);
      const data = await response.json();
  
      if (data.length > 0) {
        const songId = data[0].id;
        const picId = data[0].pic_id;
  
        const songUrl = `https://music-api.gdstudio.xyz/api.php?types=url&source=netease&id=${songId}&br=999`;
        const picUrl = `https://music-api.gdstudio.xyz/api.php?types=pic&source=netease&id=${picId}`;
  
        const songResponse = await fetch(songUrl);
        const songData = await songResponse.json();
        const picResponse = await fetch(picUrl);
        const picData = await picResponse.json();
  
        document.getElementById('song-cover').src = picData.url;
        document.getElementById('song-info').innerText = `${data[0].name} - ${data[0].artist.join(', ')}`;
        document.getElementById('song-audio').src = songData.url;
      } else {
        alert('未找到歌曲');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('搜索失败');
    }
  }