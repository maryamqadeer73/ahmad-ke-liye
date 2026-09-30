import Reveal from './Reveal'

export default function SectionTitle({ children, id }) {
  return (
    <Reveal as="h2" blur className="section-title">
      <span id={id}>{children}</span>
    </Reveal>
  )
}
