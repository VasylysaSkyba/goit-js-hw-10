
import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchCatByBreed, fetchBreeds } from './cat-api';

const breedSelectRef = document.querySelector('.breed-select');
const catInfoRef = document.querySelector('.cat-info');
const loaderRef = document.querySelector('.loader');

loaderRef.classList.add('hidden');
catInfoRef.classList.add('hidden');
let breedId = '';