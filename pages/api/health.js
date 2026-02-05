import healthCheckHandler from '../../services/healthCheck';

export default function handler(req, res) {
    return healthCheckHandler(req, res);
}