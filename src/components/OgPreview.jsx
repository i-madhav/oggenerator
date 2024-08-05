import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const PreviewPage = () => {
  const location = useLocation();
  const { title, content, image, logo } = location.state || {};

  // Generate the og:image URL
  const ogImageUrl = `https://og-image.vercel.app/${encodeURIComponent(title)}.png?theme=light&md=1&fontSize=100px&images=${encodeURIComponent(logo)}&content=${encodeURIComponent(content.substring(0, 100))}`;
  const shareableLink = `https://oggenerator-woad.vercel.app/preview?title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}&image=${encodeURIComponent(image)}&logo=${encodeURIComponent(logo)}`;

  return (
    <div className="container mx-auto p-4 h-screen">
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={content} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content={shareableLink} />
        <meta property="og:type" content="article" />
      </Helmet>

      <h1 className="text-2xl font-bold mb-4">Preview</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">OG Image</h2>
        <img src={ogImageUrl} alt="OG Preview" className="w-full max-w-2xl h-auto" />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Shareable Link</h2>
        <input 
          type="text" 
          value={shareableLink} 
          readOnly 
          className="w-full max-w-2xl p-2 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default PreviewPage;
