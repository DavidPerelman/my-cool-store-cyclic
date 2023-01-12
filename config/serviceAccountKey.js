module.exports = {
  serviceAccountKey: {
    type: 'service_account',
    project_id: process.env.serviceAccountKey_project_id,
    private_key_id: process.env.serviceAccountKey_private_key_id,
    private_key: serviceAccountKey_private_key,
    client_email: serviceAccountKey_client_email,
    client_id: serviceAccountKey_client_id,
    auth_uri: serviceAccountKey_auth_uri,
    token_uri: serviceAccountKey_token_uri,
    auth_provider_x509_cert_url: serviceAccountKey_auth_provider_x509_cert_url,
    client_x509_cert_url: serviceAccountKey_client_x509_cert_url,
  },
};
