import {
  ArrowBigDown,
  ArrowBigUp,
  CalendarClock,
  Dice6,
  Goal,
  Scale,
  Sigma,
  Skull,
  ThumbsDown,
  ThumbsUp,
  X,
} from 'lucide-react'
import { Roll } from '../../utils/contexts/RollHistoryContext'
import { HistoryLineContainer, InsightDetail, InsightsLine } from './styled'

type NotificationLineProps = {
  history: Roll
}

export const NotificationLine = ({ history }: NotificationLineProps) => {
  const date = new Date(history.timestamp)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')

  const formattedTime = date.toLocaleTimeString('pt-BR')

  const formattedDate = `${day}/${month} - ${formattedTime}`

  const resultString = history.result.join(', ')
  return (
    <HistoryLineContainer>
      <InsightsLine>
        <InsightDetail>
          <Dice6 size={20} color="#265d88" strokeWidth={1.5} />
          <span>
            <small>Dados: </small>
            {history.quantity}
            <X size={12} strokeWidth={1.5} /> {history.dice}
          </span>
        </InsightDetail>

        <InsightDetail>
          <CalendarClock size={20} color="#265d88" strokeWidth={1.5} />{' '}
          <small> {formattedDate}</small>
        </InsightDetail>
      </InsightsLine>

      <InsightDetail>
        <Goal size={20} color="#265d88" strokeWidth={1.5} />
        <span>
          {' '}
          <small>Resultados: </small>
          {resultString}
        </span>
      </InsightDetail>

      <InsightsLine>
        {history.difficulty > 0 && (
          <>
            <InsightDetail>
              <ThumbsUp size={20} color="#388826" strokeWidth={1.5} />
              <span>
                {' '}
                <small>Sucessos: </small>
                {history.insights.successes}
              </span>
            </InsightDetail>

            {history.insights.fails > 0 && (
              <InsightDetail>
                <ThumbsDown size={20} color="#f44a28" strokeWidth={1.5} />
                <span>
                  {' '}
                  <small>Falhas: </small>
                  {history.insights.fails}
                </span>
              </InsightDetail>
            )}
          </>
        )}
        {history.insights.criticalFails > 0 && (
          <InsightDetail>
            <Skull size={20} color="#d11818" strokeWidth={1.5} />
            <span>
              {' '}
              <small>Falhas críticas: </small>
              {history.insights.criticalFails}
            </span>
          </InsightDetail>
        )}
      </InsightsLine>

      <InsightsLine>
        <InsightDetail>
          <Sigma size={20} color="#265d88" />
          <span>
            <small>Soma: </small>
            {history.insights.total}
          </span>
        </InsightDetail>
        {history.result.length > 1 && (
          <>
            <InsightDetail>
              <ArrowBigUp size={20} color="#388826" strokeWidth={1.5} />
              <span>
                <small>Maior: </small>
                {history.insights.highestRoll}
                {history.insights.highestQuantity > 1 && (
                  <small>
                    {' '}
                    <sup>
                      ({history.insights.highestQuantity}
                      x)
                    </sup>
                  </small>
                )}
              </span>
            </InsightDetail>
            <InsightDetail>
              <ArrowBigDown size={20} color="#d11818" strokeWidth={1.5} />
              <span>
                <small>Menor: </small>
                {history.insights.lowestRoll}
                {history.insights.lowestQuantity > 1 && (
                  <small>
                    {' '}
                    <sup>
                      ({history.insights.lowestQuantity}
                      x)
                    </sup>
                  </small>
                )}
              </span>
            </InsightDetail>
          </>
        )}
      </InsightsLine>

      {history.difficulty > 0 && (
        <InsightDetail>
          <Scale size={20} color="#265d88" strokeWidth={1.5} />
          <span>
            {' '}
            <small>Dificuldade: </small>
            {history.difficulty}
          </span>
        </InsightDetail>
      )}
    </HistoryLineContainer>
  )
}

export default NotificationLine
