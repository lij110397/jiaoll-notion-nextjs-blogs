import React from 'react';
const TagItem = ({ tag }:{tag:string}) => (
    <div className='badge badge-secondary text-primary'>
      {tag}
    </div>
  );
export default TagItem;