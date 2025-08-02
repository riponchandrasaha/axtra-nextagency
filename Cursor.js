import React, { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('team_cursor');
    const cursor1 = document.querySelector('.cursor1');
    const cursor2 = document.querySelector('.cursor2');

    if (!cursor || !cursor1 || !cursor2) return;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
      cursor1.style.left = x + 'px';
      cursor1.style.top = y + 'px';
      cursor2.style.left = x + 'px';
      cursor2.style.top = y + 'px';
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      cursor1.style.opacity = '1';
      cursor2.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      cursor1.style.opacity = '0';
      cursor2.style.opacity = '0';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="cursor" id="team_cursor">
      Drag
    </div>
  );
};

export default Cursor;