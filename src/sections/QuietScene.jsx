import BubuScene from '../components/BubuScene'
import SectionTitle from '../components/SectionTitle'
import Lines from '../components/Lines'
import FloatingNote from '../components/FloatingNote'

/* A calm full-screen scene: small picture, heading and lines. Used for the serious parts. */
export default function QuietScene({ data }) {
  const titleId = `${data.id}-title`
  return (
    <section
      id={data.id}
      className="scene-page"
      data-tone={data.tone || 'plain'}
      aria-labelledby={data.title ? titleId : undefined}
      aria-label={data.title ? undefined : data.id}
    >
      {data.scene && <BubuScene variant={data.scene} size={data.sceneSize || 'md'} />}
      {data.title && <SectionTitle id={titleId}>{data.title}</SectionTitle>}
      <Lines lines={data.lines} />
      {data.note && <FloatingNote {...data.note} />}
    </section>
  )
}
