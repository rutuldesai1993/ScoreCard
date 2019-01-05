import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { Slider } from 'react-native-elements';
import { Card, CardSection, NonEditableTextCenter } from './common';

export default class ScoreCard extends Component {
  constructor(props) {
        super(props);
        this.state = {
            visible: false,
            min: '28.3',
            rie: '1.04',
            coi: '20',
            rpy: '',
            fpy: '',
            gtm: 0,
            gql: 0,
            ghc1: 0,
            ghc2: 0,
            gfx: 0,
            rpm: '',
            ias: '',
            ish: '',
            das: '',
            ds: '',
            aar: '',
            roi: 0,
            por: '0.036',
            hpw: '0.16',
            tpr: '0.18',

        };
    }
  render() {
    return (
      <ScrollView>
      <Card>
        <CardSection>
        <NonEditableTextCenter
        label="Revenue gains from accelerated time to market of new functionality(GTM)"
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="Revenue Per Year: "
        />
        <NumericInput />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="Revenue Increase Estimate: 0.15"
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="GTM: 0.0"
        />
        </CardSection>
      <Text style={styles.errorTextStyle} />
        <CardSection>
            <NonEditableTextCenter
            label="Gain from flexibility in the IT environment (GFX)"
            />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="Application Annual Revenue: "
        />
        <NumericInput />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="72 % Avg TCO reduction x5 % cost of IT as percentage of revenue: 0.036"
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="GFX: 0.0"
        />
        </CardSection>
        <Text style={styles.errorTextStyle} />
        <CardSection>
            <NonEditableTextCenter
label="Gains from enhanced IT team productivity and cost reduction of IT headcount waste(GHC)"
            />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="IT average salary: "
        />
        <NumericInput />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="7.2 / 45 saving hours per week / total hours: 0.16"
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="IT staff headcount: "
        />
        <NumericInput />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="GHC (IT Ops): 0.0"
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="Developer average salary: "
        />
        <NumericInput />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="Average Minutes to recover difference: 28 minutes"
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="60 % TRICD  x 75 % TSRCA x 40 % TDSPR: 0.18 minutes"
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="GHC (Developers): 0.0"
        />
        </CardSection>
        <Text style={styles.errorTextStyle} />
        <CardSection>
            <NonEditableTextCenter
label="Gains from cost reduction of application failures resulting from increased quality(GQL)"
            />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="Failures Per Year: "
        />
        <NumericInput />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="Average Minutes to recover difference: 28.3 minutes"
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="Revenue per minute: "
        />
        <NumericInput />
        <NonEditableTextCenter
        label=" Minutes"
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="GQL: 0.0"
        />
        </CardSection>
        <Text style={styles.errorTextStyle} />
        <CardSection>
        <NonEditableTextCenter
        label="Return of Investment"
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="Cost of Investment:"
        />
        </CardSection>
        <CardSection>
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
        <Slider />
        </View>
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="GHC(Developers):"
        />
        </CardSection>
        <CardSection>
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
        <Slider />
        </View>
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="GTM:"
        />
        </CardSection>
        <CardSection>
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
        <Slider />
        </View>
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="GHC(IT Ops):"
        />
        </CardSection>
        <CardSection>
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
        <Slider />
        </View>
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="GQL:"
        />
        </CardSection>
        <CardSection>
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
        <Slider />
        </View>
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="GFX:"
        />
        </CardSection>
        <CardSection>
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
        <Slider />
        </View>
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="ROI: 0.0"
        />
        </CardSection>
      </Card>
      </ScrollView>
    );
  }
}
const styles = {
  errorTextStyle: {
    fontSize: 10,
    alignSelf: 'center',
    color: 'red'
  }
};
