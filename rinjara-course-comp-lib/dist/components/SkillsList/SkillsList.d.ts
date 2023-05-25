import React from 'react';
declare type SkillsListProps = {
    isExpanded: boolean;
    handleExpandClick: () => void;
    skills?: string[];
};
declare const SkillsList: React.FC<SkillsListProps>;
export default SkillsList;
