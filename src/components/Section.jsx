import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: #ffffff;
`

const Section = ({ id, title, items = [] }) => {
  return (
    <section id={id} className="py-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Card key={item.title} className="shadow">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="mb-2">{item.description}</p>
            {item.technologies && (
              <p className="text-sm text-gray-600 mb-2">
                Tecnologías: {item.technologies.join(', ')}
              </p>
            )}
            {item.link && (
              <a
                href={item.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Repositorio
              </a>
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Section
