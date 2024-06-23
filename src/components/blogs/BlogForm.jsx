import React from 'react';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';

const BlogForm = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('titre', data.titre);
        formData.append('contenu', data.contenu);
        formData.append('coache_id', data.coache_id);
        
        if (data.images.length > 0) {
            for (let i = 0; i < data.images.length; i++) {
                formData.append('images[]', data.images[i]);
            }
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/blog_articles', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Blog post created successfully');
        } catch (error) {
            console.error(error);
            alert('Error creating blog post');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Title:</label>
                <input {...register('titre', { required: true })} />
                {errors.titre && <span>This field is required</span>}
            </div>

            <div>
                <label>Content:</label>
                <textarea {...register('contenu', { required: true })}></textarea>
                {errors.contenu && <span>This field is required</span>}
            </div>

            <div>
                <label>Coach ID:</label>
                <input type="number" {...register('coache_id', { required: true })} />
                {errors.coache_id && <span>This field is required</span>}
            </div>

            <div>
                <label>Images:</label>
                <input type="file" {...register('images')} multiple />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default BlogForm;
