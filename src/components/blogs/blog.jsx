import React, { useState } from 'react';
import axios from 'axios';
import Likes_popup from './likes_popus';

function Blog(props) {
  const [isModalOpenLogin, setisModalOpenLogin] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const openModalLogin = () => {
    setisModalOpenLogin(true);
  };

  const closeModal = () => {
    setisModalOpenLogin(false);
  };

  const handleCreateFormToggle = () => {
    setShowCreateForm(!showCreateForm);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('titre', title);
    formData.append('contenu', content);
    
    try {
      const response = await axios.post('http://your-api-endpoint/blog_create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Blog post created:', response.data);
      alert('Blog post created successfully!');
      setTitle('');
      setContent('');
      setShowCreateForm(false);
    } catch (error) {
      console.error('Error creating blog post:', error);
      alert('Failed to create blog post.');
    }
  };

  return (
    <div className='bg-white rounded-md mt-10'>
      <div className='pl-10 py-5'>
        <div className='flex'>
          <div className='flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full mr-2'>
            {props.user_profile}
          </div>
          <div>
            <div className='font-semibold capitalize flex flex-col'>{JSON.parse(localStorage.getItem('user')).name}</div>
            <div className='text-slate-400 text-[11px]'>20 h</div>
          </div>
        </div>
        <div className='pt-3'>hhhhhhhh</div>
      </div>

      <img
        src='https://img.freepik.com/photos-premium/course-rapide-sprint-relais-athlete-competition-dans-jeu-fitness-entrainement-pour-bien-etre-energetique-piste-stade-sportif-athlete-coureur-vitesse-exercice-entrainement_590464-221769.jpg'
        className='w-full'
        alt='chair'
      />
      <div className='flex border-b-2 px-2 justify-between text-slate-600'>
        <div className='hover:text-blue-500 hover:underline cursor-pointer' onClick={openModalLogin}>
          80 likes
        </div>
        <div>18 comments</div>
      </div>

      <div className='flex justify-around border-b-2 py-2'>
        <div className='flex hover:bg-slate-100 cursor-pointer w-[260px] justify-center py-1'>
          <img src='./img/like.png' className='w-5 h-5 mr-2' alt='prb' /> <span className=''>Like</span>
        </div>

        <div className='flex hover:bg-slate-100 cursor-pointer w-[260px] justify-center py-1' onClick={handleCreateFormToggle}>
          <img src='./img/coment.png' className='w-5 h-5 mr-2 mt-0.5' alt='prb' /> <span className=''>Comment</span>
        </div>
      </div>

      {showCreateForm && (
        <div style={{ marginTop: '50px' }}>
          <div className='flex justify-center relative top-1/3'>
            <div className='relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white' style={{ width: '100%', borderLeft: 'none', borderRight: 'none' }}>
              <div className='relative flex gap-4 items-center'>
                <div className='flex items-center justify-center w-12 h-12 rounded-full overflow-hidden'>
                  <img
                    src='https://images-us.nivea.com/-/media/nivea/local/ng/articles2/moisturizer-for-men---maain-banner.jpg?rx=1929&ry=0&rw=687&rh=806'
                    className='w-full h-full object-cover rounded-full'
                    alt=''
                    loading='lazy'
                  />
                </div>
                <div className='flex flex-col w-full'>
                  <div className='flex flex-row justify-between'>
                    <p className='relative text-xl whitespace-nowrap truncate overflow-hidden'>Said Youssfi</p>
                    <a className='text-gray-500 text-xl' href='#'>
                      <i className='fa-solid fa-trash'></i>
                    </a>
                  </div>
                  <p className='text-gray-400 text-sm'>20 April 2022, at 14:88 PM</p>
                </div>
              </div>
              <p className='-mt-4 text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Maxime quisquam vero adipisci beatae voluptas dolor ame.
              </p>
            </div>
          </div>

          <form onSubmit={handleCreateBlog} className='bg-transparent p-4 rounded mt-4 flex items-center'>
            <textarea
              value={content}
              onChange={handleContentChange}
              className='border border-gray-300 rounded px-3 py-2 flex-grow mr-2'
              required
              placeholder='Write your comment...'
              style={{ height: '50px' }}
            />

            <button type='submit' className='bg-green-500 text-white px-4 py-2 rounded' style={{ height: '47px' }}>
              Send <i className='fa-regular fa-paper-plane'></i>
            </button>
          </form>
        </div>
      )}

      <Likes_popup isOpen={isModalOpenLogin} setOpen={closeModal} />
    </div>
  );
}

export default Blog;
