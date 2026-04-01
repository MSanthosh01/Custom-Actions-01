import type { WalnutContext } from './walnut';

/** @walnut_method
 * name: Generate Security ID
 * description: Generate random 5-character alphanumeric security ID and store in $[securityId]
 * actionType: custom_generate_security_id
 * context: shared
 * needsLocator: false
 * category: Data Processing
 */
export async function generateSecurityId(ctx: WalnutContext) {
  // Generate random 5-character alphanumeric string
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let securityId = '';
  
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    securityId += characters[randomIndex];
  }
  
  ctx.log('Generated security ID: ' + securityId);
  
  // Store in runtime variable using the variable name from $[securityId] in description
  ctx.setVariable(ctx.args[0], securityId);
}
