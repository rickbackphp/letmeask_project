import {ReactNode} from 'react'
import cx from 'classnames';
import './styles.scss';
import classNames from 'classnames';

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }
    children?: ReactNode;
    isAnswered?: boolean;
    isHighLighted?: boolean;
}


export function Question({ 
    content,
    author,
    isAnswered = false,
    isHighLighted = false,
    children
}: QuestionProps){
    return( 
        <div className={cx('questions',
            { answe: isAnswered },
            { highLighted: isHighLighted && !isAnswered }
        )}>
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                <div className="children">
                    {children}
                </div>
            </footer>
        </div>
    );
}