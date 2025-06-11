const Projects = () => {
  return (
    <section className="px-6 py-10 bg-gray-100 text-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Helping Hands</h3>
          <p>React, Node.js, MongoDB — Donation platform connecting NGOs with secure authentication and admin dashboards.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">OTT-Based Streaming Platform</h3>
          <p>React, Redux — Optimized UI and video streaming experience for a full-featured OTT web app.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Signature Verification System</h3>
          <p>Python, Machine Learning — Built a model to detect handwritten signature forgery for banks and secure systems.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
