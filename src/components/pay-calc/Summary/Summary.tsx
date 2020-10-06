import React from 'react';
import { StepNavigation } from 'components/ui-components';
import { Form, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { payCalcSelectors } from 'state/pay-calc';

interface SummaryProps {
  onStartAgain(): void;
}

export const Summary: React.FC<SummaryProps> = ({ onStartAgain }) => {
  const hourlyPayRate = useSelector(payCalcSelectors.hourlyPayRate);
  const isCalculating = useSelector(payCalcSelectors.isCalculating);

  return (
    <div>
      <h2 className="h2 mb-3">Your pay rates summary</h2>
      <Form>
        <Form.Group as={Row} controlId="hourlyRate">
          <Form.Label column xs="6" sm="4" md="3" lg="2">
            Hourly pay rate:
          </Form.Label>
          <Col xs="4">
            <Form.Control plaintext readOnly value={hourlyPayRate} />
          </Col>
        </Form.Group>
      </Form>
      <StepNavigation
        onStartAgain={onStartAgain}
        showBack={false}
        showNext={false}
      />
    </div>
  );
};
