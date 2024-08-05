import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const PreviewPage = () => {
  const location = useLocation();
  const { title, content, image, logo } = location.state || {};

  // Generate the OG image URL with custom styling for Reddit-like appearance
  const ogImageUrl = `https://og-image.vercel.app/${encodeURIComponent(title)}.png?theme=light&md=1&fontSize=50px&images=${encodeURIComponent(logo)}&content=${encodeURIComponent(content.substring(0, 100))}&widths=100&heights=90&logoHeight=50&logoWidth=50&bg=white&border=2px_solid_gray&textAlign=center&textColor=black&padding=20`;

  const shareableLink = `${window.location.origin}/preview?title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}&image=${encodeURIComponent(image)}&logo=${encodeURIComponent(logo)}`;

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

      <div className="bg-white shadow-md rounded p-4 max-w-lg mx-auto">
        <div className="flex items-center mb-4">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full mr-2" />
          <div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-gray-500">{content}</p>
          </div>
        </div>
        <img src={image} alt="Post Image" className="w-full max-w-2xl h-auto" />
      </div>

      <div className="mt-4 max-w-lg mx-auto">
        <h2 className="text-xl font-semibold mb-2">Shareable Link</h2>
        <input 
          type="text" 
          value={shareableLink} 
          readOnly 
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default PreviewPage;
