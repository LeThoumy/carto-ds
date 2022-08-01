import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'carto-accent-btn',
  styleUrl: 'carto-accent-btn.css',
})

export class CartoAccentBtn {
  @Prop() service: string;
  @Prop() icon: string;
  @Prop() variant: string;

	render() {
		return (
			<button class={`layout ${this.variant}`}>
        Get {this.service} Insurance Quote <slot></slot>
        <span class="var-icon">{this.icon}</span>
			</button>
		);
	}
}
