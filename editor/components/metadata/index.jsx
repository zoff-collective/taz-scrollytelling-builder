import React from 'react';

import Form from '../form';
import Input from '../form/input';
import styles from './styles';
import Textarea from '../form/textarea';

const updateField = (event, callback) => {
  event.preventDefault();

  const { target } = event;
  const { name, value } = target;

  callback(name, value);
};

export default ({ metadata, updateMetadataField }) => (
  <main className="metadata">
    <style jsx>{styles}</style>

    <div className="constraint">
      <h1 className="title">Metadata</h1>

      <p className="intro">
        These are sharing information, which are used by facebook and twitter
        to show proper previews of the story.
      </p>

      <Form
        fields={[
          <Input
            name="title"
            label="Title"
            defaultValue={metadata.title}
            onChange={event => updateField(event, updateMetadataField)}
          />,
          <Textarea
            name="description"
            label="Description"
            defaultValue={metadata.description}
            onChange={event => updateField(event, updateMetadataField)}
          />,

          <h2 className="section-title">Facebook</h2>,

          <Input
            name="og:title"
            label="Title"
            defaultValue={metadata['og:title']}
            placeholder={metadata.title}
            onChange={event => updateField(event, updateMetadataField)}
          />,
          <Textarea
            name="og:description"
            defaultValue={metadata['og:description']}
            label="Description"
            onChange={event => updateField(event, updateMetadataField)}
          />,
          <Input
            name="og:site_name"
            label="Site Name"
            onChange={event => updateField(event, updateMetadataField)}
          />,
          <Input name="og:url" label="URL" />,
          <Input
            name="og:locale"
            label="Locale"
            defaultValue={metadata['og:locale']}
            onChange={event => updateField(event, updateMetadataField)}
          />,

          <h2 className="section-title">Twitter</h2>,

          <Input
            name="twitter:title"
            label="Title"
            defaultValue={metadata['twitter:title']}
            placeholder={metadata.title}
            onChange={event => updateField(event, updateMetadataField)}
          />,
          <Input
            name="twitter:site"
            label="Site Name"
            defaultValue={metadata['twitter:site']}
            onChange={event => updateField(event, updateMetadataField)}
          />,
          <Input
            name="twitter:url"
            label="URL"
            defaultValue={metadata['twitter:url']}
            onChange={event => updateField(event, updateMetadataField)}
          />,
          <Input
            name="og:locale"
            label="Locale"
            defaultValue={metadata['og:locale']}
            onChange={event => updateField(event, updateMetadataField)}
          />
        ]}
      />
    </div>
  </main>
);
