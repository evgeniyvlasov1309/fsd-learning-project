import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/comments';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer, getArticleComments } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader.ts/useDynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text } from 'shared/ui/Text';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const initialReducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    useDynamicModuleLoader(initialReducers);
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div className={classNames("", {}, [className])}>
                {t('article-not-found')}
            </div>
        );
    }

    return (
        <div className={classNames("", {}, [className])}>
            <ArticleDetails id={id} />
            <Text className={cls.commentTitle} title={t('comments')} />
            <AddCommentForm onSendComment={onSendComment}/>
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </div>
    );
};

export default memo(ArticleDetailsPage);
