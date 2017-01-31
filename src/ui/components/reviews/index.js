import React, { Component } from 'react';
import Moment from 'moment';

import Link from '../link';
import * as Style from './style';

export default class Reviews extends Component {

    static defaultProps = {
        pro: { },
        con: { }
    };

    render () {
        const { children, pro, con } = this.props;
        const proDate = Moment(new Date(pro.datePosted)).format('MMM D, YYYY');
        const conDate = Moment(new Date(con.datePosted)).format('MMM D, YYYY');

        return (
            <Style.ReviewsContainer>

                <Style.ReviewSide>
                    <Style.ReviewType>
                        PRO
                        <Style.ReviewTypeDescription>
                            most useful 4-5 star review
                        </Style.ReviewTypeDescription>
                    </Style.ReviewType>
                    <Style.ReviewTitle>{ pro.title }</Style.ReviewTitle>
                    <Style.ReviewContent>{ pro.review }</Style.ReviewContent>
                    <Style.ReviewAuthor>
                        <Link>{ pro.screenName }</Link> { proDate }
                    </Style.ReviewAuthor>
                </Style.ReviewSide>

                <Style.ReviewSide>
                    <Style.ReviewType>
                        CON
                        <Style.ReviewTypeDescription>
                            most useful 1-2 star review
                        </Style.ReviewTypeDescription>
                    </Style.ReviewType>
                    <Style.ReviewTitle>{ con.title }</Style.ReviewTitle>
                    <Style.ReviewContent>{ con.review }</Style.ReviewContent>
                    <Style.ReviewAuthor>
                        <Link>{ con.screenName }</Link> { conDate }
                    </Style.ReviewAuthor>
                </Style.ReviewSide>

                <Style.ReviewsClearFix/>

            </Style.ReviewsContainer>
        )
    }
}
