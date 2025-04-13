import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

export default function WikiPage() {
  const { page } = useParams();
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import(`./wiki/${page}.md`)
      .then((res) => fetch(res.default))
      .then((response) => response.text())
      .then((text) => setMarkdown(text))
      .catch((err) => console.error(err));
  }, [page]);

  return (
    <div className="prose mx-auto py-8">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

