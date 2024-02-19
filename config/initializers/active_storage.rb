Rails.application.config.active_storage.resolve_model_to_route = :rails_storage_proxy

Rails.application.routes.default_url_options[:host] = 'quantumshop.onrender.com'

ActiveStorage::Current.url_options = Rails.application.config.action_mailer.default_url_options
