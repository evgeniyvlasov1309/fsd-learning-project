import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader.ts/useDynamicModuleLoader';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();
    useDynamicModuleLoader(reducers);

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <div className={classNames(cls.AddCommentForm, {}, [className])}>
            <Input
                className={cls.input}
                placeholder={t('input-comment-text')}
                value={text}
                onChange={onCommentTextChange}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onSendHandler}
            >
                {t('create-comment-btn')}
            </Button>
        </div>
    );
});

export default AddCommentForm;
