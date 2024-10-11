import { ChangeEvent, Dispatch, FormEvent, useState } from 'react';
import styles from '../styles/createPlaylist.module.css';
import TextInput from './TextInput';
import Heading from './Heading';

type Playlist = {
    imageUrl: string;
    title: string;
    description: string;
  }

type CreatePlaylistProps = {
    setPlayLists: Dispatch<React.SetStateAction<Playlist[]>>;
    playLists: Array<Playlist>;
}

export default function CreatePlayList({setPlayLists, playLists} : CreatePlaylistProps){

    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    


    function handleTitleChange(event: ChangeEvent<HTMLInputElement>){
        setTitle(event.target.value);
    }

    function handleDescriptionChange(event: ChangeEvent<HTMLInputElement>){
        setDescription(event.target.value);
    }

    function handleImageUrlChange(event: ChangeEvent<HTMLInputElement>){
        setImageUrl(event.target.value);
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        const newList = [...playLists];
        newList.push({
            imageUrl,
            title,
            description
        });
        setPlayLists(newList);
        setImageUrl('');
        setTitle('');
        setDescription('');
    }

    return(
        <div className={styles.createPlaylist}>
            <div className={styles.formularioContainer}>
                <Heading as={'h3'}>Creá tu Playlist</Heading>
                <form onSubmit={handleSubmit} className={styles.formulario}>
                    <TextInput label='Título' id='title' value={title} onChange={handleTitleChange} 
                    className={styles.inputForm} type="text" placeholder='Título' />
                    <TextInput label='Descripción' id='description' value={description}  
                    onChange={handleDescriptionChange} className={styles.inputForm} type="text" 
                    placeholder='Descripción' />
                    <TextInput label='Imágen (url)' id='imageUrl' value={imageUrl}  
                    onChange={handleImageUrlChange} className={styles.inputForm} type="text" 
                    placeholder='Imágen (url)' />
                    <button type='submit' className={styles.btnAgregar}>Agregar Playlist</button>
                </form>
            </div>
            <div className={styles.vistaPrevia}>
                <img 
                className={styles.imagenPrevia} 
                src={imageUrl?imageUrl:"https://lh3.googleusercontent.com/d/1Jjrtu51P19Wt7f8DNh2yVPahVQvkX5-_"} 
                alt="vistaPrevia" 
                />
                <Heading as={'h2'} className={styles.tituloVistaPrevia}>{title?title:'Título'}</Heading>
                <Heading as={'h3'} className={styles.descripcionVistaPrevia}>{description?description:'Descripción'}</Heading>
            </div>
        </div>
    );
}