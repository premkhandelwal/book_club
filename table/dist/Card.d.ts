/// <reference types="react" />
import './card.css';
declare type Member = {
    name: string;
    imgUrl: string;
    noOfReads: number;
};
interface ButtonProps {
    label: string;
    members: Array<Member>;
}
/**
 * Primary UI component for user interaction
 */
export declare const Card: ({ label, members, ...props }: ButtonProps) => JSX.Element;
export {};
