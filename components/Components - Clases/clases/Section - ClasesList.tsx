import CardClases from "./Card - Clases";

export default function SectionClasesList() {
  return (
    <section>
      <div className=" grid grid-cols-3 px-5 gap-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <CardClases key={index} />
        ))}
      </div>
    </section>
  );
}
