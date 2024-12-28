export default function AboutTextBanner() {
  return (
    <div className="relative bg-gradient-to-r from-green-400 mb-3 to-blue-500 text-white py-10 px-6 rounded-lg shadow-xl w-full mx-auto">
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-4">About Our Institution text</h1>
        <p className="text-lg leading-relaxed mb-6">
          Our institution is dedicated to providing quality education rooted in
          values and excellence. With a commitment to nurturing both academic
          and personal growth, we strive to create a community of lifelong
          learners who are prepared to excel in their future endeavors.
        </p>
      </div>
    </div>
  );
}
