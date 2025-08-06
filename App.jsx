import React, { useState } from 'react';

export default function App() {
  const [headline, setHeadline] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  async function fetchImages() {
    setLoading(true);
    setImages([]);

    // Stubbed Getty image demo data
    const fallbackGettyResults = [
      { id: 'g1', url: 'https://media.gettyimages.com/id/1305169962/photo/healthy-breakfast-bowl.jpg?s=612x612&w=gi&k=20&c=6WzJWwYX2sFGslCTcglKxglKY6HaLPn9sUvFDaTO7iM=', description: 'Healthy breakfast bowl with fruit and grains', source: 'https://www.gettyimages.com/detail/photo/healthy-breakfast-bowl-royalty-free-image/1305169962' },
      { id: 'g2', url: 'https://media.gettyimages.com/id/1178264561/photo/overhead-shot-of-fresh-green-vegetables.jpg?s=612x612&w=gi&k=20&c=jcbWML4sCGt-ozAU2Zo8W4bXYaR-D64tEG3qbfMYw5A=', description: 'Overhead shot of fresh green vegetables', source: 'https://www.gettyimages.com/detail/photo/overhead-shot-of-fresh-green-vegetables-royalty-free-image/1178264561' },
      { id: 'g3', url: 'https://media.gettyimages.com/id/1184260563/photo/low-glycemic-snacks.jpg?s=612x612&w=gi&k=20&c=UBVE2EGLX7QWoAywJ3FbAAfok06qxGqkVZURZTHIErE=', description: 'Low glycemic healthy snack options', source: 'https://www.gettyimages.com/detail/photo/low-glycemic-snacks-royalty-free-image/1184260563' }
    ];

    // Simulate AI processing delay
    setTimeout(() => {
      setImages(fallbackGettyResults);
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-4">🧠 PhotoScout AI (Demo)</h1>
      <p className="mb-6 text-gray-700">Enter a headline to fetch AI-suggested Getty stock photos (demo mode).</p>

      <input
        type="text"
        placeholder="Article Headline"
        value={headline}
        onChange={e => setHeadline(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
      />

      <textarea
        placeholder="Short Summary (optional)"
        value={summary}
        onChange={e => setSummary(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
      />

      <button
        onClick={fetchImages}
        disabled={!headline || loading}
        className={`px-4 py-2 text-white rounded ${!headline || loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {loading ? 'Searching...' : 'Find Images'}
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {images.map(img => (
          <div key={img.id} className="border rounded overflow-hidden">
            <img src={img.url} alt={img.description} className="w-full h-48 object-cover" />
            <div className="p-2">
              <p className="text-sm text-gray-700">{img.description}</p>
              <a href={img.source} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 underline mt-1 inline-block">
                View Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// JavaScript Document