import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';
import '../App.css';

const ArticlesListPage = () => (
    <>
    <h1>Articles</h1>
    <ArticlesList articles={articleContent} />
    </>
);

export default ArticlesListPage;