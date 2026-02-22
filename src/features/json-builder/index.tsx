import TextEditor from "./components/text-editor";

const JSONBuilder = () => {
  return (
    <main className="mt-14 px-16">
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-1 text-gray-950 dark:text-gray-50">
          JSON Builder
        </h1>
      </div>
      <TextEditor />
    </main>
  );
};

export default JSONBuilder;
