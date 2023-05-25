import React from 'react';
declare type SkillsListProps = {
    isExpanded: boolean;
    handleExpandClick: () => void;
    skills?: string[];
};
export declare const SkillsList: React.FC<SkillsListProps>;
export {};
